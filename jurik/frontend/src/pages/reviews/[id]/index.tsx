import { useState } from 'react';
import { useRouter } from 'next/router';
import useFetch from '@/hooks/useFetch';
import FormattedDate from '@/components/FormattedData';
import useDynamicFetch from '@/hooks/useDynamicFetch';
export default function Review() {
    const router = useRouter();
    const { id } = router.query;

    const { data, loading } = useFetch(`http://localhost:3001/review/${id}`);
    const { handleSubmitForm } = useDynamicFetch(`http://localhost:3001/review/update`);

    const [newValue, setNewValue] = useState('');

    const handleInputChange = (e) => {
        setNewValue(e.target.value);
    };

    const handleUpdateValue = () => {
        const postData = {
            id : id,
            value: newValue
        }
        handleSubmitForm(postData, 'PUT');

        setNewValue("")
    };

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <div>
            <h3>{data.id}-{data.value} created <FormattedDate dateString={data.created_at} /></h3>
            <input type="text" value={newValue} onChange={handleInputChange} />
            <button onClick={handleUpdateValue}>Update Value</button>
        </div>
    );
}
