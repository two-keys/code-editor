export default function toastError(toast, error) {
  let message;

  if(error.response) message = error.response.data.message;
  else message = error.message

  const id = 'main-error'
  if (!toast.isActive(id)) {
    toast({
      id,
      title: 'Error',
      description: message,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
      containerStyle: {
        margin: '10px',
        fontFamily: 'heading'
      }
    })
  }
}