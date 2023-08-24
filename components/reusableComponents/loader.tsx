import { Audio } from 'react-loader-spinner'

const Loader = () => {
    return (
        < div className='flex flex-col mt-20'>
<Audio
  height="80"
  width="80"
  radius="9"
  color="gray"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass />
  <p className='mt-3'>page loading..</p>
  </div> );
}
 
export default Loader;