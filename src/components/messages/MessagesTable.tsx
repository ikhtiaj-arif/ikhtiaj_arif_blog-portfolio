'use client'


export type TMessages = {
    _id?: string;
    name: string;
    email: string;
    message: string
    user?: string;
};

type TMessageProp = {
    messages: TMessages[]
};

const MessagesTable = ({ messages }: TMessageProp) => {




    return (
        <div className="p-6 bg-tertiary shadow-md mx-2 md:mx-4 mt-20 rounded-lg">
            <h2 className="section-sub-text font-bold mb-4">All Messages</h2>

            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-white-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left">name</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">email</th>
                            <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages?.length > 0 ? (
                            messages.map((message) => (
                                <tr key={message._id} className="hover:bg-black-100 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center hidden lg:table-cell">
                                        {message.email}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {message.message}
                                       
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center text-gray-500 py-4">
                                    No blogs available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MessagesTable;
