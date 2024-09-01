import { IMaterial } from "@/app/calculate/page";



export async function calculate(name: string, email: string, mobile: string, materials: IMaterial[]) {

    try {

        console.log(process.env.NEXT_PUBLIC_API_ENDPOINT_URL)

        const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT_URL + '/calculate/concrete', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                mobile: mobile,
                materials: materials
            }),

        });

        const { status, token, data, message } = await response.json();

        if (status == true) {

            return {
                status: 200
            }
        } else {

            console.log('Coming');
            console.log(message);

            return {
                status: 400,
                errorMessage: message
            }
        }
    } catch (error) {

        console.log(error)

        return {
            status: 500
        };
    }


}