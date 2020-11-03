const path = require("path")
const Stringify = str => {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaaeeeeiiiioooouuuunc------"

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~theme": path.resolve(__dirname, "src/theme"),
        "~utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const indexTemplate = path.resolve("src/template/index.js")
  const indexEnTemplate = path.resolve("src/template/index_en.js")

  return graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            language {
              code
            }
            uri
            title
            translations {
              uri
            }
            seo {
              seoDescription
              seoImage {
                localFile {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                }
              }
              seoTitle
            }
            Modules {
              modules {
                ... on WpPage_Modules_Modules_Button {
                  fieldGroupName
                  bButton {
                    target
                    title
                    url
                  }
                }
                ... on WpPage_Modules_Modules_ContactForm {
                  fieldGroupName
                }
                ... on WpPage_Modules_Modules_Newsletter {
                  fieldGroupName
                }
                ... on WpPage_Modules_Modules_GoogleMaps {
                  fieldGroupName
                  mLatitude
                  mLongitude
                }
                ... on WpPage_Modules_Modules_TextBlock {
                  fieldGroupName
                  tBackgroundColor
                  tElements
                  tSubtitle
                  tText
                  tTextColor
                  tTitle
                  tImage {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                          srcSet
                        }
                      }
                    }
                  }
                  tBackgroundImage {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
                ... on WpPage_Modules_Modules_Hero {
                  fieldGroupName
                  hMediaType
                  hTitle
                  hText
                  hSubtitle
                  hVideo {
                    hVideoUrl {
                      mediaItemUrl
                    }
                    hVideoImageFallback {
                      localFile {
                        childImageSharp {
                          fluid {
                            src
                            srcSet
                          }
                        }
                      }
                    }
                  }
                  hImage {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                          srcSet
                        }
                      }
                    }
                    altText
                  }
                  hButton {
                    target
                    title
                    url
                  }
                }
                ... on WpPage_Modules_Modules_Accordion {
                  aItems {
                    aText
                    aTitle
                  }
                  fieldGroupName
                }
                ... on WpPage_Modules_Modules_Video {
                  fieldGroupName
                  vUrl
                  vImageFallback {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
                ... on WpPage_Modules_Modules_Cards {
                  cColumnsNumber
                  fieldGroupName
                  cCards {
                    fieldGroupName
                    cTitle
                    cText
                    cSubtitle
                    cPopupInfo {
                      fieldGroupName
                      text
                      title
                    }
                    cLink
                    cImage {
                      localFile {
                        childImageSharp {
                          fixed {
                            src
                          }
                        }
                      }
                    }
                    cHasPopupInfo
                  }
                }
                ... on WpPage_Modules_Modules_Slideshow {
                  fieldGroupName
                  sShowArrows
                  showDots
                  sSlides {
                    title
                    text
                    subtitle
                    image {
                      localFile {
                        childImageSharp {
                          fluid {
                            srcSet
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWpPage.edges.forEach(project => {
      if (project.node.language.code === "PT") {
        createPage({
          path: project.node.uri,
          component: indexTemplate,
          context: project.node,
        })
      } else {
        createPage({
          path: project.node.uri,
          component: indexEnTemplate,
          context: project.node,
        })
      }
    })
  })
}
