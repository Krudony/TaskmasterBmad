export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Web Login Demo</h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.js authentication demonstration with NextAuth.js mock mode
        </p>
        <div className="space-y-4">
          <a
            href="/login"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Login
          </a>
          <div className="text-sm text-gray-500">
            This is a demo application showing authentication capabilities
          </div>
        </div>
      </div>
    </main>
  )
}