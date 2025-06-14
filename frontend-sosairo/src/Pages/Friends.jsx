import React from "react";
import { FaUserFriends } from "react-icons/fa";
import MainLayoutPage from "../Layout/MainLayoutPage";

export default function Friends() {
  return (
    <MainLayoutPage>
      <div className="text-white">
        <div className="fixed left-16 right-0 flex items-center justify-start h-16 px-4 gap-6 bg-gray-700 shadow shadow-black">
          <button className="btn btn-md bg-base-300 hover:bg-base-100" onClick={() => document.getElementById('my_modal_search').showModal()}>Find or start a conversation</button>
          <dialog id="my_modal_search" className="modal">
            <div className="modal-box">
            <label className="input w-full">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow w-full" placeholder="Where would you like to go?" />
            </label>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Close</button>
            </form>
          </dialog>

          <div className="w-px h-8 bg-neutral-content opacity-50"></div>

          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-base-300 shadow-md shadow-black">
              <div className="text-sm">Add Friends</div>
            </div>          
            <button className="w-12 h-12 btn btn-circle btn-sm bg-base-100 hover:bg-primary" onClick={() => document.getElementById("addFriends").showModal()}>
              <FaUserFriends size={16} />
            </button>
          </div>
          <dialog id="addFriends" className="modal">
            <div className="modal-box">
              <div className="mb-8 space-y-2">
                <h3 className="font-bold text-lg">Add New Friends</h3>
                <p className="text-sm mb-4">You can add friends with their Username.</p>
              </div>
              <label className="input w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16" className="opacity-60">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input type="search" className="grow w-full" placeholder="You can add friends with their Username." />
              </label>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Close</button>
            </form>
          </dialog>
        </div>
      </div>
    </MainLayoutPage>
  )
}