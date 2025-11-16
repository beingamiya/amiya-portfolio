import React, { useState, useEffect } from 'react'

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [adminEnabled, setAdminEnabled] = useState(false)

  useEffect(() => {
    // Load submissions from localStorage
    const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    setSubmissions(storedSubmissions)
    const params = new URLSearchParams(window.location.search)
    const enabled = params.get('admin') === '1' || localStorage.getItem('adminMode') === 'true'
    setAdminEnabled(Boolean(enabled))
  }, [])

  const clearSubmissions = () => {
    localStorage.removeItem('contactSubmissions')
    setSubmissions([])
  }

  const exportSubmissions = () => {
    const dataStr = JSON.stringify(submissions, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'contact-submissions.json'
    link.click()
  }

  if (!adminEnabled) {
    return null
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm opacity-50 hover:opacity-100 transition-opacity"
      >
        Admin
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Contact Form Submissions</h2>
            <div className="flex gap-2">
              <button
                onClick={exportSubmissions}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={submissions.length === 0}
              >
                Export JSON
              </button>
              <button
                onClick={clearSubmissions}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                disabled={submissions.length === 0}
              >
                Clear All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">
            Total submissions: {submissions.length}
          </p>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {submissions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No submissions yet</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission, index) => (
                <div key={submission.id || index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{submission.name}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(submission.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-blue-600 mb-2">{submission.email}</p>
                  <p className="text-gray-700">{submission.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
