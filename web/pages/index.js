import groq from 'groq'
import client from '../client'
import Layout from '../components/Layout'

const Index = (props) => {
    const {config} = props;
  
    return (
        <Layout config={config}>
            <h1>No route set</h1>
            <h2>Setup automatic routes in sanity or custom routes in next.config.js</h2>
      </Layout>
    )
}

export default Index;