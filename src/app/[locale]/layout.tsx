import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Geist } from 'next/font/google'
import { notFound } from 'next/navigation'

import '@/app/globals.scss'

import { Footer } from '@/widgets/footer'

import { routing } from '@/i18n/routing'

const geist = Geist({
	subsets: ['latin', 'cyrillic']
})

//   Locale Font
//   const myFont = localFont({
//     src: './my-font.woff2',
//   })

export default async function LocaleLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} className={geist.className}>
			<body>
				<NextIntlClientProvider>
					<main>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
