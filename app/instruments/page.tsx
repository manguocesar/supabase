import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Instruments() {
    const supabase = await createClient();
    const { data: instruments } = await supabase.from("instruments").select();

    return (
        <div className='flex flex-col space-between'>
            <Link href='/' className='bg-gray-400 rounded-md p-2'>
                <p>Home</p>
            </Link>
            <div className='m-4 flex flex-col space-y-4'>
                {instruments ? (
                    instruments.map(instrument => (
                        <p key={instrument.id}>o {instrument.name}</p>
                    ))
                ) : (
                    <p>No instruments available</p>

                )}
                <pre className='text-sm'>
                    JSON Data structure:
                    {JSON.stringify(instruments, null, 2)}
                </pre>
            </div>
        </div>
    );
}