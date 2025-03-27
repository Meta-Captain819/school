import AdmissionForm from "../components/AdmissionForm";

export default function AdmissionPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center mt-20 bg-gray-100 px-4 py-10">
      <div className="max-w-4xl w-full bg-white p-6 md:p-10 shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">Admission Form</h1>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below to apply for admission.
        </p>
        <AdmissionForm />
      </div>
    </main>
  );
}
