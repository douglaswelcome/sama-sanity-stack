import NextLink from 'next/link'

const Page404 = () => {
    return (
        <section className="umoja-l-grid-section umoja-u-bg--charcoal2">
            <div className="umoja-l-grid--12">
                <div className="umoja-l-grid-span--full">
                    <h1>We're Sorry</h1>
                    <div className="divider-line divider-line--horizontal"></div>
                    <p>
                        The page you are looking for has been moved or deleted. If you need any help, feel free to <NextLink href={`/company-contact`}><a>contact us</a></NextLink>
                    </p>
                </div>
            </div>
        </section>
    )
}
  
export default Page404