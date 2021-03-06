const {
  AuthenticationService,
  JWTStrategy
} = require('@feathersjs/authentication')

const {
  expressOauth,
  OAuthStrategy
} = require('@feathersjs/authentication-oauth')

class GitHubStrategy extends OAuthStrategy {
  async getEntityQuery(profile) {
    return {
      github_id: profile.id
    };
  }
  async getEntityData(profile) {
    const {
      login: github_username,
      id: github_id,
      name,
      avatar_url: image,
    } = profile;
    return {
      github_username,
      github_id,
      name,
      image,
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('github', new GitHubStrategy())

  app.use('/authentication', authentication)
  app.configure(expressOauth())
}
