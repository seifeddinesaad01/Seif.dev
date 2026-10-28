import Link from 'next/link'

// Original seif.dev wordmark: blue "seif", ".dev" nudges right on hover.
const Logo = ({ className = '' }: { className?: string }) => (
  <Link href="/" aria-label="seif.dev home" className={`group inline-flex items-baseline text-xl font-semibold tracking-tight ${className}`}>
    <span className="text-brand">seif</span>
    <span className="text-fg transition-all duration-300 ease-out group-hover:pl-1">.dev</span>
  </Link>
)

export default Logo
