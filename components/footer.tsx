export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© {currentYear} GuruF. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Built with Next.js, Tailwind CSS, and ShadCN UI</p>
      </div>
    </footer>
  )
}
