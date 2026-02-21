export function Icon(props:any){
    const {icon}=props
    switch(icon){
        case"arrowDown":
            return  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12.3359L9.20706 9.54297L7.79285 10.9572L11.2928 14.4572C11.6834 14.8477 12.3165 14.8477 12.7071 14.4572L16.2071 10.9572L14.7928 9.54297L12 12.3359Z" fill="#73767C"/>
                    </svg>
        case"magnifyingGlass":
            return  <svg {...props} width="24" height="24" stroke="white" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 6.5C11.933 6.5 13.5 8.067 13.5 10H15.5C15.5 6.96243 13.0376 4.5 10 4.5V6.5Z" fill="#0D6EFD"/>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7072 14.293L21.7072 20.293L20.293 21.7072L14.293 15.7072L15.7072 14.293Z" fill="#0D6EFD"/>
                    </svg>

    }
}