import { useDispatch, useSelector } from "react-redux";
import { useT } from "../i18n";
import { State, useNonSerializableStore } from "../store";
import { dosSlice } from "../store/dos";
import { uiSlice } from "../store/ui";
import { Checkbox } from "./checkbox";

export function Editor() {
    const t = useT();
    const dispatch = useDispatch();
    const editor = useSelector((state: State) => state.ui.editor);
    return <Checkbox
        class="mt-4"
        label={t("editor")}
        checked={editor}
        onChange={(e) => dispatch(uiSlice.actions.setEditor(e))}
    />;
}

export function MouseCapture() {
    const t = useT();
    const dispatch = useDispatch();
    const lock = useSelector((state: State) => state.dos.mouseCapture);
    return <Checkbox
        class="mt-4"
        label={t("mouse_lock")}
        checked={lock}
        onChange={(l) => dispatch(dosSlice.actions.mouseCapture(l))}
    />;
}

export function SystemCursor() {
    const t = useT();
    const dispatch = useDispatch();
    const lock = useSelector((state: State) => !state.dos.noCursor);
    return <Checkbox
        class="mt-4"
        label={t("system_cursor")}
        checked={lock}
        onChange={(l) => dispatch(dosSlice.actions.noCursor(!l))}
    />;
}

export function MobileControls() {
    const t = useT();
    const dispatch = useDispatch();
    const lock = useSelector((state: State) => state.dos.mobileControls);
    return <Checkbox
        class="mt-4"
        label={t("mobile_controls")}
        checked={lock}
        onChange={(l) => dispatch(dosSlice.actions.mobileControls(l))}
    />;
}

export function MirroredControls() {
    const t = useT();
    const dispatch = useDispatch();
    const lock = useSelector((state: State) => state.dos.mirroredControls);
    return <Checkbox
        class="mt-4"
        label={t("mirrored_controls")}
        checked={lock}
        onChange={(l) => dispatch(dosSlice.actions.mirroredControls(l))}
    />;
}

export function PauseCheckbox() {
    const t = useT();
    const dispatch = useDispatch();
    const paused = useSelector((state: State) => state.dos.paused);
    const disabled = useSelector((state: State) => state.ui.window) !== "run";
    return <Checkbox
        class="mt-4"
        label={t("pause")}
        checked={paused}
        disabled={disabled}
        onChange={(p) => dispatch(dosSlice.actions.paused(p))}
    />;
}

export function WorkerCheckbox() {
    const t = useT();
    const dispatch = useDispatch();
    const worker = useSelector((state: State) => state.dos.worker);
    const hardware = useSelector((state: State) => state.dos.backendHardware);
    const disabled = useSelector((state: State) => state.ui.window) === "run";
    const nonSerializableStore = useNonSerializableStore();
    return hardware && nonSerializableStore.options.backendHardware ? null : <Checkbox
        class="mt-4"
        label={t("worker")}
        checked={worker}
        disabled={disabled}
        onChange={(w) => dispatch(dosSlice.actions.dosWorker(w))}
    />;
}

export function OffscreenCanvasCheckbox() {
    const t = useT();
    const dispatch = useDispatch();
    const offscreenCanvas = useSelector((state: State) => state.dos.offscreenCanvas);
    return <Checkbox
        class="mt-4"
        label={t("offscreen_canvas")}
        checked={offscreenCanvas}
        onChange={(o) => dispatch(dosSlice.actions.offscreenCanvas(o))}
    />;
}

export function HardwareCheckbox() {
    const t = useT();
    const dispatch = useDispatch();
    const hardware = useSelector((state: State) => state.dos.backendHardware);
    const nonSerializableStore = useNonSerializableStore();
    return nonSerializableStore.options.backendHardware ? <Checkbox
        class="mt-4"
        label={t("hardware")}
        checked={hardware}
        onChange={(h) => dispatch(dosSlice.actions.dosBackendHardware(h))}
    /> : null;
}
