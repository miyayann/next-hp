import Image from "next/image"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDove,faHouse,faMugHot} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Layout title='Contact'>
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Conatct info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image 
          className="rounded-full"
          src="/avatar.jpg"
          width={60}
          height={60}
          alt="avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="font-bold text-xs mt-2">New York, NY</p>
          <p className="font-bold mt-3">phone</p>
          <p className="font-bold text-xs mt-2">+1 234 567 890</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="font-bold text-xs mt-2">email@example.com</p>
        </div>
        <div className="mt-6 flex justify-around">
        <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faDove} size="xl" style={{color: "#195eb8",}} />
            </a>
          </div>
        <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#3b1f51",}} />
            </a>
          </div>
        <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faMugHot} size="xl" style={{color: "#511f3a",}} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact