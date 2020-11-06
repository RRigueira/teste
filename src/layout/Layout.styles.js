import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const ChildrenWrapper = css`
  $main: #f0d8bb;
  $white: #ffffff;
  $black: #1e1f13;

  * {
    box-sizing: border-box;
    font-family: "HelveticaNeue-CondensedBold", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: $main;
    color: $black;
    &:before {
      animation: grain 8s steps(10) infinite;
      background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
      content: "";
      height: 300%;
      left: -50%;
      opacity: 0.3;
      position: fixed;
      top: -100%;
      width: 300%;
    }
    &.no-scroll {
      overflow-y: hidden;
    }
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }

  //Header

  .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    &.fluid {
      width: 100%;
      max-width: 100%;
      padding: 0;
    }
    @media (min-width: 1024px) {
      max-width: 960px;
    }
    @media (min-width: 1216px) {
      max-width: 1152px;
    }
    @media (min-width: 1408px) {
      max-width: 1560px;
    }

    .row {
      display: flex;
      align-items: center;
      &.space-between {
        justify-content: space-between;
      }
      &.center {
        justify-content: center;
      }
    }
  }

  header {
    font-size: 16px;
    position: fixed;
    z-index: 99;
    width: 100%;
    font-weight: "700";
    .container {
      .row {
        height: 128px;
        .logo {
          a {
            color: $black;
            text-decoration: none;
          }
        }
        .menu {
          cursor: pointer;
          border-radius: 100%;
          border: 1px solid $black;
          height: 80px;
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease-in-out;
          &:hover {
            color: $white;
            background: $black;
          }
        }
      }
    }
  }

  main {
    .container {
      position: relative;
      .row {
        height: 100vh;
        align-items: center;
        .image-container {
          position: relative;
          .thumbnail {
            overflow: hidden;
            position: relative;
            .frame {
              img {
                width: 100%;
              }
            }
          }
          .information {
            position: absolute;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            text-transform: uppercase;
            .location {
              span:nth-child(2) {
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }

  //single
  .single {
    .container {
      .top-row {
        height: 50vh;
        width: 100%;
        align-items: flex-end;
        .top {
          padding-bottom: 40px;
          .details {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .location {
              span:nth-child(2) {
                margin-left: 16px;
              }
            }
            .mua {
              text-transform: uppercase;
            }
          }
          .model {
            overflow: hidden;
            .first {
              margin-right: 72px;
            }
            span {
              display: inline-block;
              position: relative;
              font-weight: 400;
              font-size: 224px;
              font-family: "Maragsa";
              @media (max-width: 1440px) {
                font-size: 128px;
              }
            }
          }
        }
      }
      .bottom-row {
        height: 50vh;
        position: relative;
        .bottom {
          height: 100%;
          width: 100%;
          .thumbnail-single {
            width: 100%;
            height: 800px;
            margin: 0 auto;
            overflow: hidden;
            position: absolute;
            left: 0;
            right: 0;
            .frame-single {
              img {
                position: absolute;
                width: 100%;
              }
            }
          }
        }
        .scroll-for-more {
          position: absolute;
          bottom: 200px;
          left: 200px;
          z-index: 20;
          .icon {
            svg {
              height: auto;
              width: 28px;
            }
          }
          .text {
            margin-top: 8px;
            color: $white;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .detailed-information {
    margin-top: 200px;
    height: 600px;
    .container {
      .row {
        justify-content: space-between;
        align-items: flex-start;
        h2 {
          font-size: 28px;
        }
        p {
          font-family: "Helvetica Neue";
          font-size: 16;
          line-height: 28px;
          font-weight: 400;
          width: 800px;
        }
      }
    }
  }
`
