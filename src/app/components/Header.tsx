import React from 'react'

export const Header = () => {
    return (
        <nav data-testid="header" className="bg-gray-100 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="flex items-center py-4 px-2">
                            <img src="https://www.drupal.org/files/Logo-Restyled_Positive_Navy.png" className="h-6"/>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <h1 style={ { fontSize: 22 } }>Carlos Calette</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}
