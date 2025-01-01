import {
  BsXCircleFill,
  BsExclamationTriangleFill,
  BsEyeFill,
  BsInfoCircleFill,
  BsChevronRight,
  BsCheckCircle,
} from "react-icons/bs";

/**
 * The type of information an `InformationBox` should convey.
 */
export enum InformationBoxType {
  Warning,
  Error,
  Success,
}

interface InformationBoxProps {
  infoBoxType: InformationBoxType;
}

/**
 * Creates a red box with an error symbol in it and some associated text.
 * It indicates to the user that there is an error with their automaton which
 * needs to be fixed before the automaton can run.
 *
 * **NOTE:** In most cases, it is preferable to use `InformationBox` with
 * `infoBoxType` set to `InformationBoxType.Error`.
 * @param {React.PropsWithChildren} props
 * @param {React.ReactNode | undefined} props.children The content of this box.
 */
function ErrorBox(props: React.PropsWithChildren) {
  return (
    <>
      <div
        className={`bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded-lg mb-2`}
      >
        <div className="flex flex-row text-left items-center place-content-start p-2">
          <BsXCircleFill className="shrink-0 mr-2 text-red-600 text-lg" />
          <div>{props.children}</div>
          {/* Use for indicating that there is more detail available -
                    not necessary at this stage */}
          {/* <BsChevronRight className='shrink-0 ml-auto' /> */}
        </div>
      </div>
    </>
  );
}

/**
 * Creates a yellow box with a warning symbol in it and some associated text.
 * It indicates to the user that there is a flaw with their automaton which may
 * cause the automaton to not behave as expected.
 *
 * **NOTE:** In most cases, it is preferable to use `InformationBox` with
 * `infoBoxType` set to `InformationBoxType.Warning`.
 * @param {React.PropsWithChildren} props
 * @param {React.ReactNode | undefined} props.children The content of this box.
 */
function WarningBox(props: React.PropsWithChildren) {
  return (
    <>
      <div
        className={`bg-amber-100 dark:bg-amber-900 border-2 border-yellow-500 rounded-lg mb-2`}
      >
        <div className="flex flex-row text-left items-center place-content-start p-2">
          <BsExclamationTriangleFill className="shrink-0 grow-0 mr-2 text-yellow-500 text-lg" />
          <div>{props.children}</div>
          {/* Use for indicating that there is more detail available -
                    not necessary at this stage */}
          {/* <BsChevronRight className='shrink-0 ml-auto' /> */}
        </div>
      </div>
    </>
  );
}

/**
 * Creates a red box with a success symbol in it and some associated text.
 * It indicates to the user that an operation was completed successfully.
 *
 * **NOTE:** In most cases, it is preferable to use `InformationBox` with
 * `infoBoxType` set to `InformationBoxType.Success`.
 * @param {React.PropsWithChildren} props
 * @param {React.ReactNode | undefined} props.children The content of this box.
 */
function SuccessBox(props: React.PropsWithChildren) {
  return (
    <>
      <div
        className={`bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg mb-2`}
      >
        <div className="flex flex-row text-left items-center place-content-start p-2">
          <BsCheckCircle className="shrink-0 grow-0 mr-2 text-green-500 text-lg" />
          <div>{props.children}</div>
          {/* Use for indicating that there is more detail available -
                    not necessary at this stage */}
          {/* <BsChevronRight className='shrink-0 ml-auto' /> */}
        </div>
      </div>
    </>
  );
}

/**
 * Creates a box with a given theme (warning, error, or success) and some
 * associated text.
 * @param {React.PropsWithChildren<InformationBoxProps>} props
 * @param {InformationBoxType} props.infoBoxType The type of information this box should convey.
 * @param {React.ReactNode | undefined} props.children The content of this box.
 */
export default function InformationBox(
  props: React.PropsWithChildren<InformationBoxProps>,
) {
  switch (props.infoBoxType) {
    case InformationBoxType.Warning:
      return (
        <WarningBox>
          <div>{props.children}</div>
        </WarningBox>
      );
    case InformationBoxType.Error:
      return (
        <ErrorBox>
          <div>{props.children}</div>
        </ErrorBox>
      );
    case InformationBoxType.Success:
      return (
        <SuccessBox>
          <div>{props.children}</div>
        </SuccessBox>
      );
  }
}
