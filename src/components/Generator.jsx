import React, {useState} from 'react';
import getRandomUser from '../services/axiosService';

const Generator = () => {
    const [user, setUser] = useState(null)

    const obtainRandomUser = () => {
        getRandomUser().then((response) => {
            if (response.status === 200) {
                setUser(response.data.results[0])
            }
        }).catch((error) => {
            alert(`Something went wrong ${error}`)
        })
    }


    return (
        <div>
            <h1 className=' text-xl font-bold mt-8 mb-10'>User Generator</h1>
            {
                user !== null ? ( 
                    <div>
                        <div className='w-[300px] flex flex-col justify-center items-center p-10 border-[1px] border-red-700 '>
                            <img src={user.picture.large} alt="avatar" className='w-32 h-32 rounded-full'/>
                            <h2 className='text-base font-semibold'>{user.name.first} {user.name.last} </h2>
                            <h3 className='text-sm font-medium'><b>Age:</b> {user.dob.age}</h3>
                            <h3 className='text-sm font-medium'><b>Country:</b> {user.location.country}</h3>
                            <h3 className='text-sm font-medium'><b>City:</b> {user.location.city}</h3>
                            <h3 className='text-sm font-medium'> {user.email} </h3>
                        </div>
                        <button onClick={obtainRandomUser} className='mt-5 text-sm py-2 px-4 rounded-3xl bg-red-500 text-white transition-all duration-300 hover:bg-red-700'>Random Other User</button>
                    </div>
                ) : 
                ( 
                    <div>
                        <p className='text-sm'>Generate a new User</p> 
                        <button onClick={obtainRandomUser} className='mt-1 text-sm py-2 px-4 rounded-3xl bg-red-500 text-white transition-all duration-300 hover:bg-red-700'>Random User</button>
                    </div>
                )
            }
        </div>
    );
};

export default Generator;