// This logic will be responsible for pulling user data from the mock API endpoint,
// storing it in localStorage, and managing the data for use in pagination, filtering, and displaying user details.
// Normally this would go in the .env file but there's no need here.
const USERS_API_URL = 'https://run.mocky.io/v3/07df66d8-df53-4de6-aadb-e4dd88060e95';

// Function to fetch user data from the API and store it in localStorage
async function fetchAndStoreUsers(): Promise<void> {
  try {
    const response = await fetch(USERS_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch users data');
    }
    const data = await response.json();
    // Store data in localStorage for later use
    localStorage.setItem('usersData', JSON.stringify(data));
    console.log('User data successfully fetched and stored in localStorage.');
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

// Function to get users from localStorage
function getUsersFromLocalStorage(): any[] {
  const usersData = localStorage.getItem('usersData');
  if (usersData) {
    return JSON.parse(usersData);
  }
  return [];
}

// Function to filter users based on criteria (e.g., organization, username, email, status, etc.)
function filterUsers(users: any[], filterCriteria: Record<string, string>): any[] {
  return users.filter(user => {
    return Object.keys(filterCriteria).every(key => {
      if (!filterCriteria[key]) return true; // If no filter for a key, include all
      return user[key]?.toString().toLowerCase().includes(filterCriteria[key].toString().toLowerCase());
    });
  });
}

// Function to paginate users
function paginateUsers(users: any[], pageNumber: number, pageSize: number): any[] {
  const startIndex = (pageNumber - 1) * pageSize;
  return users.slice(startIndex, startIndex + pageSize);
}

// Function to fetch user details by ID (or any unique key)
function getUserDetailsById(userId: string): any | undefined {
  const users = getUsersFromLocalStorage();
  return users.find(user => user.id === userId);
}

// Example usage
(async () => {
  await fetchAndStoreUsers(); // Fetch users and store them in localStorage
  const allUsers = getUsersFromLocalStorage();
  console.log('All Users:', allUsers);

  // Example: Filtering users by organization and status
  const filteredUsers = filterUsers(allUsers, { organization: 'Lendsqr', status: 'Active' });
  console.log('Filtered Users:', filteredUsers);

  // Example: Paginating users - Page 1 with 10 users per page
  const paginatedUsers = paginateUsers(filteredUsers, 1, 10);
  console.log('Paginated Users (Page 1):', paginatedUsers);

  // Example: Get user details by ID
  const userDetails = getUserDetailsById('1');
  console.log('User Details:', userDetails);
})();
