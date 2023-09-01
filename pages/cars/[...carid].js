import AbouteCarComponent from '@/components/module/abouteCarComponent';
import carsData from '@/data/dataCars';
import { useRouter } from 'next/router';
import React from 'react';

const Carid = () => {
    const router=useRouter();
    const id=router.query.carid;
    const aboutCar=carsData[id-1]
    return (
        <div className="flex flex-col justify-center items-center" >
            <AbouteCarComponent car={aboutCar}/>
        </div>
    );
}

export default Carid;
