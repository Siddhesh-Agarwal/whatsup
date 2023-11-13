import Image from 'next/image'
import HeroImage from "/public/hero.jpg"
import { Footer } from './Footer'

export const Hero = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-center text-gray-900">
                        WhatsUp
                    </h1>
                    <p className="text-xl text-center text-gray-600">
                        A P2P chat app.
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <Image
                        src={HeroImage}
                        alt="WhatsUp"
                        width={650}
                        className="shadow-lg rounded-lg shadow-fuchsia-300 dark:shadow-fuchsia-700 drop-shadow-md"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}