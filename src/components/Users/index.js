import { useEffect, useRef, useState } from 'react';
import Profile from '../../assets/image/download.jpeg';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const groupId = cookies.get('groupId');
function UserList({ group, socket }) {
    let newarr = useRef([]);
    const [usergroup, setusergroup] = useState([]);
    newarr.current = group;
    useEffect(() => {
        setusergroup(newarr.current);
    }, [group]);

    useEffect(() => {
        socket.on(groupId, function (data) {
            newarr.current.push(data);
            setusergroup(newarr.current);
        });
        return () => {
            socket.off(groupId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[groupId]);

    let i = 1;

    return (
        <ul className="list bg-gray-500">
            {usergroup?.length &&
                usergroup?.map((users) => {
                    return (
                        <li
                            key={users._id}
                            className="inline-block shadow-lg p-3 m-2 bg-green-300">
                            <div className="w-12 float-left text-center p-2">
                                {i++}
                            </div>
                            <div className="w-25 float-left pl-5 w-20 opacity-1">
                                <p>{users.name}</p>
                                <p>Point 0</p>
                            </div>
                            <div className="w-18 float-left pl-5">
                                <img
                                    className="h-12 float-left"
                                    src={Profile}
                                    alt="demo"
                                />
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
}
export default UserList;
