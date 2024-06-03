"use client"
import React, { useState } from "react"
import classNames from "classnames"
import ProductReviewCard from "@/components/products/ProductReviewCard"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { productReviews } from "@/lib/constData"

interface Props {}

const ProductMoreInfo: React.FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="container">
      <div className="flex justify-center flex-row">
        <div className="product-description-review flex flex-wrap py-[26px] items-center sm:flex-row justify-center text-xl sm:space-x-20 border-b-2">
          <button
            className={classNames("button flex flex-row", {
              "hover:bg-orange-200 text-orange-600 underline underline-offset-[21px] ":
                selectedCategory === "Description",
            })}
            onClick={() => handleClick("Description")}
          >
            Description
          </button>
          <button
            className={classNames("button flex flex-row", {
              "hover:bg-orange-200 text-orange-600 underline underline-offset-[21px]":
                selectedCategory === "Reviews",
            })}
            onClick={() => handleClick("Reviews")}
          >
            Reviews
          </button>
          <button
            className={classNames("button flex flex-row", {
              "hover:bg-orange-200 text-orange-600 underline underline-offset-[21px]":
                selectedCategory === "Comments",
            })}
            onClick={() => handleClick("Comments")}
          >
            Comments
          </button>
          <button
            className={classNames("button flex flex-row col", {
              "hover:bg-orange-200 text-orange-600 underline underline-offset-[21px]":
                selectedCategory === "Shipping Policy",
            })}
            onClick={() => handleClick("Shipping Policy")}
          >
            Shipping Policy
          </button>
          <button
            className={classNames("button flex flex-row", {
              "hover:bg-orange-200 text-orange-600 underline underline-offset-[21px]":
                selectedCategory === "Size Chart",
            })}
            onClick={() => handleClick("Size Chart")}
          >
            Size Chart
          </button>
        </div>
      </div>

      {selectedCategory == "Description" && (
        <div className="selected-content flex-auto  justify-center text-left text-lg text-gray-800 py-2 ">
          <p className="mb-8">
            Lorem Ipsum is simply dummy text of printing presses and text files.
            Tomorrow, starting with the radio buttons, but a little pain. Write
            on the brake now. No comments were, at best, but health care
            financing or laughter. Welcome to learn more about popular culture,
            and time, no, nor to grow strong. We look at the members of cable
            television television.
          </p>
          <ul>
            On the other hand, we denounce with indignation those men who are
            deceived and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and discomfort
            that is going to occur, and the same fault is those who fail in
            their duty due to weakness of will, which is the same as saying that
            they fail due to fatigue and pain. These cases are very simple and
            easy to distinguish. In a free hour, unhindered by our power of
            choice and when nothing prevents us from being able to do what we
            like most, every pleasure is appreciated and every pain can be
            avoided. But in certain circumstances and due to the demands of duty
            or the obligations of business, these pleasures have to be
            repudiated and their annoyances accepted. The wise man, therefore,
            always has a choice in these matters: he rejects pleasures to ensure
            other greater pleasures, or otherwise avoid pains to avoid worse
            pains.
          </ul>
        </div>
      )}

      {selectedCategory == "Reviews" && (
        <section className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h5 className="pt-8">Reviews</h5>
            {productReviews.map((review) => (
              <ProductReviewCard key={review.id} data={review} />
            ))}
          </div>
          <div>
            <h5 className="py-8">Leave a Review</h5>
            <ProductReviewForm />
          </div>
        </section>
      )}

      {selectedCategory == "Comments" && (
        <div className="max-w-md mx-auto p-4">
          <textarea
            className="resize border rounded-md w-full p-2"
            placeholder="Add a comment..."
          />
        </div>
      )}

      {selectedCategory == "Shipping Policy" && (
        <div className="selected-content flex-auto p-10 text-left">
          <h1 className="text-3xl">Shipping policy for our store</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            <li> 1-2 business days (Typically by end of day)</li>
            <li>30 days money back guarantee</li>
            <li>24/7 live support</li>
            <li>hate dignissim qui blandit praesent</li>
            <li>luptatum zzril delenit augue duis dolore</li>
            <li>te feugait nulla facilisi.</li>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Typi non
            habent claritatem insitam; est usus legentis in iis qui facit eorum
            claritatem. Investigationes demonstraverunt readers legere me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est Notare quam
            littera gothica, quam nunc putamus parum clearam, anteposuerit
            litterarum forma humanitatis per seacula fourth tenth and fifth
            tenth. Eodem moda typi, qui nonc nobis videntur parum clari, fiant
            sollemnes in futurum.
          </p>
        </div>
      )}

      {selectedCategory == "Size Chart" && (
        <div className="grid">
          <h1 className="text-2xl font-sans font-normal ">Size Chart</h1>
          <table className="table-auto border-collapse border border-neutral-300 w-full inden">
            <tbody>
              <tr>
                <td className="cun-name border border-neutral-300 ">
                  <span>UK</span>
                </td>
                <td className="border border-neutral-300">18</td>
                <td className="border border-neutral-300">20</td>
                <td className="border border-neutral-300">22</td>
                <td className="border border-neutral-300">24</td>
                <td className="border border-neutral-300">26</td>
              </tr>
              <tr>
                <td className="cun-name border border-neutral-300 ">
                  <span>European</span>
                </td>
                <td className="border border-neutral-300">46</td>
                <td className="border border-neutral-300">48</td>
                <td className="border border-neutral-300">50</td>
                <td className="border border-neutral-300">52</td>
                <td className="border border-neutral-300">54</td>
              </tr>
              <tr>
                <td className="cun-name border border-neutral-300 ">
                  <span>USA</span>
                </td>
                <td className="border border-neutral-300">14</td>
                <td className="border border-neutral-300">16</td>
                <td className="border border-neutral-300">18</td>
                <td className="border border-neutral-300">20</td>
                <td className="border border-neutral-300">22</td>
              </tr>
              <tr>
                <td className="cun-name border border-neutral-300 ">
                  <span>Australia</span>
                </td>
                <td className="border border-neutral-300">28</td>
                <td className="border border-neutral-300">10</td>
                <td className="border border-neutral-300">12</td>
                <td className="border border-neutral-300">14</td>
                <td className="border border-neutral-300">16</td>
              </tr>
              <tr>
                <td className="cun-name border border-neutral-300 ">
                  <span>Canada</span>
                </td>
                <td className="border border-neutral-300">24</td>
                <td className="border border-neutral-300">18</td>
                <td className="border border-neutral-300">14</td>
                <td className="border border-neutral-300">42</td>
                <td className="border border-neutral-300">36</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ProductMoreInfo
