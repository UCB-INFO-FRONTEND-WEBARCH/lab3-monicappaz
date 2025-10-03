// ========================================
// Analytics Workshop - Array Methods Practice
// ========================================

// Dataset
const analyticsData = [
  {
    name: "Alice",
    totalSessions: 3,
    avgSessionDuration: 180,
  },
  {
    name: "Bob",
    totalSessions: 5,
    avgSessionDuration: 240,
  },
  {
    name: "Charlie",
    totalSessions: 2,
    avgSessionDuration: 90,
  },
  {
    name: "Diana",
    totalSessions: 7,
    avgSessionDuration: 300,
  },
];

// ========================================
// TODO FUNCTIONS - Students implement these
// ========================================

/**
 * 1. Conditionals
 * Return "Good" if avgSessionDuration >= 200, otherwise "Low"
 * @param {Object} user - User object with avgSessionDuration property
 * @returns {string} "Good" or "Low"
 */

// TODO: use if/else or ternary operator
// Hint: Check if user.avgSessionDuration >= 200

const getEngagementLevel = (user) => {
  // If session duration is >= 200, return good
  if (user.avgSessionDuration >= 200) {
    return "Good";
  }
  // If less than 200, return low
  else {
    return "Low";
  }
};

/**
 * 2. For Loop
 * Find the user with the longest avgSessionDuration
 * @param {Array} data - Array of user objects
 * @returns {string} Name of user with longest session
 */

// TODO: use for loop
// Hint: Keep track of max duration and corresponding user name

const findLongestSessionUser = (data) => {
  // Set initial tracking vars to 0 and "" to access for loop properly
  // (can't do let maxDuration bc condition in loop would compare to undefined)
  let maxDuration = 0;
  let maxDurationUser = "";
  // Looping through each elem in array & tracking max duration/associated user
  for (let i = 0; i < data.length; i++) {
    if (data[i].avgSessionDuration > maxDuration) {
      maxDuration = data[i].avgSessionDuration;
      maxDurationUser = data[i].name;
    }
  }
  // Returning user name with highest duration in array
  return maxDurationUser;
};

/**
 * 3. Map
 * Format each user's session count
 * @param {Array} data - Array of user objects
 * @returns {Array} Array of formatted strings like "Alice: 3 sessions"
 */

// TODO: use map
// Hint: Use template literal `${user.name}: ${user.totalSessions} sessions`
const formatSessions = (data) => {
  // Initialized array var for new array we will create with .map()
  let formattedStrArray;
  // Used .map() to look at each user in my data array
  // and make a new array with the formatted strings to return
  formattedStrArray = data.map(
    (user) => `${user.name}: ${user.totalSessions} sessions`
  );
  return formattedStrArray;
};

/**
 * 4. Filter
 * Get names of users with >= 5 sessions
 * @param {Array} data - Array of user objects
 * @returns {Array} Array of active user names
 */

// TODO: use filter + map
// Hint: First filter users with totalSessions >= 5, then map to get names
const getActiveUsers = (data) => {
  // Initialized variables to keep outputs from .filter() and .map()
  let filteredData;
  let filteredAndMappedData;
  // Filtered data to look only at users with 5 or more total sessions
  filteredData = data.filter((user) => user.totalSessions >= 5);
  // Used map to make a new array with the filtered users names and returned
  filteredAndMappedData = filteredData.map((user) => user.name);
  return filteredAndMappedData;
};

/**
 * 5. Reduce
 * Calculate total sessions across all users
 * @param {Array} data - Array of user objects
 * @returns {number} Sum of all totalSessions
 */

// TODO: use reduce
// Hint: Accumulate user.totalSessions
const getTotalSessions = (data) => {
  // Initialize varible for total sum of sessions to return
  let totalSumOfSessions;
  // Used .reduce on input data to sum over our total (I set total to 0 to start summing)
  // and we keep summing each users total sessions to final total we save and return
  totalSumOfSessions = data.reduce(
    (total, user) => total + user.totalSessions,
    0
  );
  return totalSumOfSessions;
};

// ========================================
// UI Functions (Already implemented)
// ========================================

const output = document.getElementById("output");

const appendOutput = (text) => {
  output.textContent += text + "\n";
};

const clearOutput = () => {
  output.textContent = "";
};

// Display raw data
document.getElementById("raw-data").textContent = JSON.stringify(
  analyticsData,
  null,
  2
);

// Button handlers
const runEngagementLevel = () => {
  clearOutput();
  appendOutput("=== Engagement Levels ===\n");
  analyticsData.forEach((user) => {
    const level = getEngagementLevel(user);
    appendOutput(`${user.name} engagement: ${level}`);
  });
};

const runLongestSession = () => {
  const longest = findLongestSessionUser(analyticsData);
  appendOutput(`\n🏆 Longest session user: ${longest}`);
};

const runFormatSessions = () => {
  const formatted = formatSessions(analyticsData);
  appendOutput(
    `\n📝 Sessions formatted: ${JSON.stringify(formatted, null, 2)}`
  );
};

const runActiveUsers = () => {
  const active = getActiveUsers(analyticsData);
  appendOutput(`\n🔥 Active users (≥5): ${JSON.stringify(active)}`);
};

const runTotalSessions = () => {
  const total = getTotalSessions(analyticsData);
  appendOutput(`\n📊 Total sessions: ${total}`);
};

const reset = () => {
  clearOutput();
};
