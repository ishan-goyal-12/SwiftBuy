import React from 'react'

const CountdownTimer = () => {
    return (
        <div>
            <div className="flex items-center space-x-2 bg-red-100 px-3 py-2 rounded-lg">
                <span className="text-red-600 font-semibold text-sm">Ends in:</span>
                <div className="flex space-x-1">
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        0
                    </div>
                    <span className="text-red-600">:</span>
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        0
                    </div>
                    <span className="text-red-600">:</span>
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownTimer