export default function SectionHeader({ children }) {
  return (
    <div className="bg-halaman-texture font-produk4 font-medium underline text-gray-lightest bg-cover bg-center mb-6 ">
       <p className="text-7xl pt-28 pb-28 text-gray-lightest text-center">
   {children}
   </p>
    </div>
  );
}
