# rails-react-webpack-boilerplate

Boilerplate for Rails and React built by Webpack

[![Build Status](https://travis-ci.com/ebkn/rails-react-webpack-boilerplate.svg?token=Af1NKfC1yC4eUqXpuo9q&branch=master)](https://travis-ci.com/ebkn/rails-react-webpack-boilerplate)

### Dependencies
```
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin17]
Rails 5.2.1
MySQL 5.7
Node.js v10.7.0
```

### Usage
```sh
$ git clone git@github.com:ebkn/rails-react-webpack-boilerplate.git
$ cd rails-react-webpack-boilerplate

## server
$ bundle install --path vendor/bundle
$ bundle exec rails db:setup
$ bundle exec rails s

## front
$ yarn install
$ yarn start
```

Test
```sh
$ bundle exec rspec
```

Linter
```sh
$ bundle exec rubocop -R
$ yarn lint
```

run linter before push
```sh
$ cp pre-push .git/hooks/
$ chmod +x ./git/hooks/pre-push
```
