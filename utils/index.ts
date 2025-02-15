import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'f893049c93msh7e93f1c30da2313p1d0975jsnf42bb110dff8',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers
    })

    const result = await response.json()

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = ( new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car;
    
    url.searchParams.append('customer', 'hrjavascript-mastery') 
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split('')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}