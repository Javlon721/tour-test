import classNames from 'classnames'

import footer from './Footer.module.scss'

function Footer() {
	return (
		<footer
			className={classNames(
				footer.footer,
				'bg-gray-800',
				'text-white',
				'p-4',
				'text-center'
			)}
		>
			<p className="text-sm">
				© {new Date().getFullYear()} My Application. All rights reserved.
			</p>
			<p className="text-xs mt-2">
				Built with ❤️ using React/Nextjs and Tailwind CSS.
			</p>
		</footer>
	)
}

export default Footer
