export default class BaseService {
    public Get<T>(url: string): Promise<T> {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
      
      }
}
