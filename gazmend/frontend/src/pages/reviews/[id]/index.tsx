'use client'
 
import { useRouter } from 'next/router';

export default function ReviewById(){

    /**
     * Detyra: 
     * 
     * nje request ne backend me marr Review by ID;
     * 
     */
    const router = useRouter();
    const { id } = router.query;
    
    return <h1>Review by ID: {id} - Value: [text]</h1>
}