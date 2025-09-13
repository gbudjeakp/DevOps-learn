/**
 * Formats a deployment status into a human-readable message
 * @param {string} status - The deployment status ('idle', 'deploying', 'success', 'error')
 * @returns {string} - The formatted status message
 */
export const formatDeploymentStatus = status => {
  const statusMap = {
    idle: 'Ready to deploy',
    deploying: 'Deployment in progress...',
    success: 'Deployment successful!',
    error: 'Deployment failed',
  }

  return statusMap[status] || 'Unknown status'
}

/**
 * Generates a random deployment ID
 * @returns {string} - A unique deployment ID
 */
export const generateDeploymentId = () => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `deploy-${timestamp}-${random}`
}

/**
 * Validates if a deployment status is valid
 * @param {string} status - The status to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidDeploymentStatus = status => {
  const validStatuses = ['idle', 'deploying', 'success', 'error']
  return validStatuses.includes(status)
}

/**
 * Calculates the estimated deployment time based on app size
 * @param {number} appSizeMB - The app size in megabytes
 * @returns {number} - Estimated deployment time in seconds
 */
export const estimateDeploymentTime = appSizeMB => {
  if (typeof appSizeMB !== 'number' || appSizeMB <= 0) {
    return 30 // Default 30 seconds for invalid input
  }

  // Base time of 30 seconds + 5 seconds per MB
  return Math.ceil(30 + appSizeMB * 5)
}

/**
 * Formats a count number with proper pluralization
 * @param {number} count - The count to format
 * @param {string} singular - The singular form of the word
 * @param {string} plural - The plural form of the word (optional)
 * @returns {string} - The formatted count with proper word form
 */
export const formatCount = (count, singular, plural = null) => {
  if (typeof count !== 'number') {
    return `0 ${plural || `${singular}s`}`
  }

  const word = count === 1 ? singular : plural || `${singular}s`
  return `${count} ${word}`
}
