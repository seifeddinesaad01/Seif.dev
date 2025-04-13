import React from 'react'
import { CodeXml } from 'lucide-react';

const CodeIcon = ({ name }: { name: string }) => {
    return (
        <div className='flex justify-center items-center gap-1 text-gray-500'>
            <CodeXml size="15px"/>
            <p>{name}</p>   
        </div>
    )
}

export default CodeIcon