import MessagesTable from '@/components/messages/MessagesTable';

const MessagesPage = async () => {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/messages`)
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <MessagesTable messages={data?.data} />
        </div>
    );
};

export default MessagesPage;