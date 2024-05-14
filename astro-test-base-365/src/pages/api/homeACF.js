export async function HomeACF(){
    const HomeACF = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                page(id: "2", idType: DATABASE_ID) {
                    home {
                      text
                      title
                      image {
                        sourceUrl
                        title
                      }
                    }
                  }
            }
            `
        })
    });
    const{ data } = await HomeACF.json();
 
    return data;
}