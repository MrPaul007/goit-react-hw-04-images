import { ThreeDots } from  'react-loader-spinner'

export default function Loader() {
    return (
        <div className='Loader'>
            <ThreeDots color="#3f51b5" height={80} width={80} />
        </div>
    )
}