class Profile extends React.Component {
    state = {
      user: null
    }
    componentDidMount () {
      const { handle } = this.props.match.params
  
      fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })
    }
    render() {
     
    }
  }