import axios from 'axios'
import { useState, useCallback } from 'react'
import { UseUIContext } from '../store/ui-context'

type configType = {
  url: string
  method?: string
  data?: object
}

const useHttp = () => {
  //   const [status, setStatus] = useState('')
  //   const [error, setError] = useState('')
  const { openHandler } = UseUIContext()

  const sendHttpRequest = useCallback(async (config: configType) => {
    // setStatus('pending')
    if (config.method !== 'get') {
      openHandler('loading ...', 'pending')
    }

    return await axios(config)
      .then((resp) => {
        // setStatus('success')
        if (config.method !== 'get') openHandler('success request', 'success')
        return resp.data
      })
      .catch((error) => {
        // setStatus('failed')
        // if (error.response.data) {
        //   setError(error.response.data.error)
        // } else {
        //   setError(error.message)
        // }
        if (config.method !== 'get') openHandler('failed request', 'failed')
        return false
      })
  }, [])

  return {
    // status,
    // error,
    sendHttpRequest,
  }
}

export default useHttp
