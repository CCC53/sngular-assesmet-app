import Image from 'next/image';

export const Header = () => {
    return (
        <nav data-testid="header" className="bg-gray-100 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="flex items-center py-4 px-2">
                            <Image src={"https://www.drupal.org/files/Logo-Restyled_Positive_Navy.png"} width={150} height={200} alt='Logo' />
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
