/* -------------------------------------------------------------------------- */
/*                          Product Name: VideoEngine                         */
/*                            Author: Mediasoftpro                            */
/*                       Email: support@mediasoftpro.com                      */
/*       License: Read license.txt located on root of your application.       */
/*                     Copyright 2007 - 2020 @Mediasoftpro                    */
/* -------------------------------------------------------------------------- */

import { Component } from "@angular/core";

@Component({
  selector: "app-spinner02",
  template: `
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
  `,
  styles: [
    `
      .sk-cube-grid {
        width: 40px;
        height: 40px;
        margin: 100px auto;
      }

      .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        background-color: #fb008b;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      }
      .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
      .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }
      .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
      }
      .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }
      .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
      .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }
      .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }
      .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      @-webkit-keyframes sk-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }
        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }

      @keyframes sk-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }
        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }
    `
  ]
})
export class Spinner2Component {}
