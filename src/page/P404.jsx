import React from 'react'
import Body from '../component/Body'
import Layout from '../component/Layout'

export default function P404() {
    return (
        <Body>
            <Layout>
                <main className="flex items-center">
                    <div className="text-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">404</h1>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">ERROR</h1>
                        <img class="mt-4" src="https://upload.wikimedia.org/wikipedia/en/1/11/Disaster_Girl.jpg"/>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    </div>
                </main>
            </Layout>
        </Body>
    )
}
