import './social.css'

export function Social({children, url}){
    return(
        <a  className='social' rel='noopener noreferrer' href={url} target='_blank'>
            {children}
        </a>
    )
}