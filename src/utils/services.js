import { trim } from './trim'
import request from './request'
import qs from 'qs'

export async function query (api, params) {
  return get(api, params)
}

export async function create (api, params) {
  return request(api, {
    method: 'POST',
    body: JSON.stringify(trim(params))
  })
}

export async function get (api, params = {}) {
  params._t = new Date().getTime()
  let url
  params = qs.stringify(trim(params), {
    indices: false,
    arrayFormat: 'repeat'
  })

  if (api.indexOf('?') > -1) {
    url = `${api}&${params}`
  } else {
    url = `${api}?${params}`
  }
  return request(url, {
    method: 'GET'
  })
}

export async function remove (api, params) {
  return request(`${api}`, {
    method: 'DELETE',
    body: JSON.stringify(trim(params))
  })
}

export async function update (api, params) {
  return request(`${api}`, {
    method: 'PUT',
    body: JSON.stringify(trim(params))
  })
}

export async function patch (api, params) {
  return request(`${api}`, {
    method: 'PATCH',
    body: JSON.stringify(trim(params))
  })
}

export async function createRaw (api, params, headers = {}) {
  return request(`${api}`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'text/plain',
      ...headers
    }
  })
}
