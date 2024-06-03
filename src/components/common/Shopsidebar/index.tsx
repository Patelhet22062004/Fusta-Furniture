import Divider from "@/modules/common/components/divider"
import React from "react"

type Props = {}

const Shopsidebar = () => {
  return (
    <>
      <div className="shopsidebar-inner mr-7">
        <form id="myform" name="testform" className="flex flex-col gap-2">
          <div className="text-xl font-semibold">FILTERS</div>
          <Divider className="pb-2"></Divider>
          <details className="single-sidebar-widget my-5">
            <summary className="single-sidebar-widget-title text-lg font-semibold text-black pb-4 relative border-b border-b-slate-300 border-solid uppercase not-italic">
              Availability
            </summary>
            <div className="sidebar-body">
              <div className="filter-value-counter flex justify-between py-2">
                <span className="filter-value-selected border-2 border-dashed border-slate-100 px-3 rounded-md font-normal">
                  0 Selected
                </span>
              </div>
              <ul className="hidden checkbox-container categories-list">
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      In Stock (30)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Out of Stock (0)
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </details>

          <details className="single-sidebar-widget mb-7">
            <summary className="single-sidebar-widget-title text-lg font-semibold text-black pb-4 relative border-b border-b-slate-300 border-solid uppercase not-italic">
              Price
            </summary>
            <div className="sidebar-body">
              <div className="filter-value-counter flex justify-between pt-2 py-4">
                <span className="filter-value-selected border-2 border-dashed border-slate-100 px-3 py-1 rounded-md font-normal">
                  0 Selected
                </span>
              </div>
              <div className="checkbox-container categories-list sidebar-price-filter flex justify-between">
                <div className="filter-range-from flex h-10 flex-row items-center justify-center rounded">
                  <span className="flex flex-row items-center money-format mr-1 text-xl font-medium">
                    <span className="money">$</span>
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      max="700.00"
                      className="filter-price-2 h-10 leading-10 w-20 p-2 border border-slate-300 border-solid mx-1 rounded"
                    />
                    <label htmlFor="" className="from">
                      to $
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      max="700.00"
                      className="filter-price-2 h-10 leading-10 w-20 p-2 border border-slate-300 border-solid mx-1 rounded"
                    />
                    <label htmlFor="" className="to"></label>
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  className="py-2 px-4 text-white hover:bg-orange-600 bg-slate-900 rounded-md font-semibold"
                >
                  Filter
                </button>
              </div>
            </div>
          </details>

          <details className="single-sidebar-widget">
            <summary className="single-sidebar-widget-title text-lg font-semibold text-black pb-4 relative border-b border-b-slate-300 border-solid uppercase not-italic">
              Color
            </summary>
            <div className="sidebar-body">
              <div className="filter-value-counter flex justify-between py-2">
                <span className="filter-value-selected border-2 border-dashed border-slate-100 px-3 py-1 rounded-md font-normal">
                  0 Selected
                </span>
              </div>
              <ul className="checkbox-container categories-list">
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Black (18)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Brown (12)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Gray (7)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Magenta (10)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Orange (16)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Pink (7)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Purple (12)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Red (4)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Violet (5)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Yellow (7)
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </details>

          <details className="single-sidebar-widget py-4">
            <summary className="single-sidebar-widget-title text-lg font-semibold text-black pb-4 relative border-b border-b-slate-300 border-solid uppercase not-italic">
              Material
            </summary>
            <div className="sidebar-body">
              <div className="filter-value-counter flex justify-between py-2">
                <span className="filter-value-selected border-2 border-dashed border-slate-100 px-3 py-1 rounded-md font-normal">
                  0 Selected
                </span>
              </div>
              <ul className="checkbox-container categories-list">
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Cotton (9)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Fiber (16)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Partex (9)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Plastic (14)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Wood (13)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      Wool (14)
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </details>

          <details className="single-sidebar-widget mb-7">
            <summary className="single-sidebar-widget-title text-lg font-semibold text-black pb-4 relative border-b border-b-slate-300 border-solid uppercase not-italic">
              Size
            </summary>
            <div className="sidebar-body">
              <div className="filter-value-counter flex justify-between py-2">
                <span className="filter-value-selected border-2 border-dashed border-slate-100 px-3 py-1 rounded-md font-normal">
                  0 Selected
                </span>
              </div>
              <ul className="checkbox-container categories-list">
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      SM (18)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      MD (23)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      LG (22)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      XL (14)
                    </label>
                  </div>
                </li>
                <li className="block mb-3 text-[#555] p-0 uppercase">
                  <div className="custom-control custom-checkbox pl-0 relative inline-flex min-h-6 mr-4">
                    <input
                      type="checkbox"
                      value="1"
                      id="Filter-availability-1"
                      className="custom-control-input h-6 opacity-100 relative z-10 leading-5 text-[#333] inline mr-2 w-auto font-normal not-italic border-solid border-slate-300 border-2 rounded select-text"
                    />
                    <label
                      htmlFor="Filter-availability-1"
                      className="custom-control-label"
                    >
                      32 X 16 X 72 (2)
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </details>
        </form>
      </div>
    </>
  )
}

export default Shopsidebar
