import MessagesTable from '@/components/messages/MessagesTable';

const MessagesPage = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/messages`)
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <MessagesTable messages={data?.data} />
        </div>
    );
};

export default MessagesPage;