import React from 'react';

const Colors = () => (
  <div >
    <h3 className="mg">Colors</h3>
    <h4 >Colores primarios</h4>
    <div class="flex">
      <div class="">
        <p className="rectangle  back-yellow"></p>
        <p className="ml-5">#ffe521</p>
      </div>
      <div class="">
        <p className="rectangle back-green1"></p>
        <p className="ml-5">#56f89a</p>
      </div>
      <div class="">
        <p className="rectangle back-fucsia"></p>
        <p className="ml-5">#ff009e</p>
      </div>
    </div>
    <h4 className="mb-3 mt-3">Backgrounds y bordes</h4>
      <div class="flex">
        <div class="">
          <p className="rectangle  back-white"></p>
          <p className="ml-5">#ffffff</p>
          <p className="ml-4">background-color</p>
        </div>
        <div class="">
          <p className="rectangle back-green1"></p>
          <p className="ml-5">#f7f7f7</p>
          <p className="ml-4">medium-background-color</p>
        </div>
        <div class="">
          <p className="rectangle back-fucsia"></p>
          <p className="ml-5">#ffffff</p>
          <p className="ml-4">border-color</p>
        </div>
      </div>
      <h4 >Textos</h4>
        <div class="flex">
          <div class="mr-5">
            <p className="border back-white p-1">$normal-text=rgb(0,0,0)</p>
            <p className="border back-black p-1">$title-text=rgb(255,255,255)<br/>$title-text=rgb(255,255,255)</p>
            <p className="border back-white p-1">$normal-text=rgb(0,0,0)</p>
            <p className="border back-yellow p-1">$button-text=#000000</p>
            <p className="border back-fucsia p-1">$button-text=#ffffff</p>
        </div>
        <div class="">
          <p className="border p-1">$charges-text-co-funder=rgb(153,153,153)</p>
          <p className="border color-yellow p-1">$charges-text-co-funder=rgb(153,153,153)</p>
          <p className="border color-green p-1">$charges-text-co-funder=rgb(153,153,153)</p>
          <p className="border p-1 color-fucsia">$charges-text-co-funder=rgb(153,153,153)</p>
        </div>
      </div>
    </div>
)

export default Colors
